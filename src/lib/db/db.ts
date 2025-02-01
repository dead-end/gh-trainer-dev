import { errorAdd } from '$lib/utils/errorStore.svelte';

const DB_NAME = 'trainer';
const DB_VERSION = 1;

const initAndUpdate = (db: IDBDatabase) => {
	if (!db.objectStoreNames.contains('files')) {
		db.createObjectStore('files', {
			keyPath: 'path'
		});
	}

	if (!db.objectStoreNames.contains('admin')) {
		db.createObjectStore('admin', {
			keyPath: 'id'
		});
	}
};

export const dbInit = () => {
	return new Promise<IDBDatabase>((resolve, reject) => {
		const request = indexedDB.open(DB_NAME, DB_VERSION);

		request.onsuccess = () => {
			const db = request.result;
			db.onerror = (ev) => errorAdd(ev.type);
			console.log('db init success!');
			resolve(db);
		};

		request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
			const db = request.result;
			if (event.oldVersion < DB_VERSION) {
				initAndUpdate(db);
			}
			console.log('db upgrade success!');
		};

		request.onerror = (event: Event) => {
			errorAdd(event.type);
			reject();
		};
	});
};

export const dbPromise = dbInit();
