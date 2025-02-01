import { errorAdd } from '$lib/utils/errorStore.svelte';

/*
export const storeDeleteIndex = (
	tx: IDBTransaction,
	storeName: string,
	idxName: string,
	idxValue: string
) => {
	return new Promise<void>((resolve, reject) => {
		//
		// Get the store from the transaction.
		//
		const store = tx.objectStore(storeName);

		//
		// Get all keys for items that have the given value for the index.
		//
		const request = store.index(idxName).getAllKeys(idxValue);

		//
		// Get an array with the keys of the matching objects,
		//
		request.onsuccess = () => {
			const keys = request.result;

			//
			// Delete all objects with their keys,
			//
			keys.forEach((key) => {
				storeDel(store, key);
			});

			//
			// Resolve after all elements are deleted.
			//
			resolve();
		};

		request.onerror = (e) => {
			errorStore.addError(`Store: ${store.name} delete index error: ${e}`);
			reject();
		};
	});
};
*/

/*
export const storeGetAll = <T>(store: IDBObjectStore) => {
	return new Promise<Array<T>>((resolve, reject) => {
		const request = store.getAll();

		request.onsuccess = () => {
			console.log('Store:', store.name, 'getAll num:', request.result.length);
			resolve(request.result);
		};

		request.onerror = (e) => {
			errorAdd(`Store: ${store.name} storeGetAll error: ${e}`);
			reject();
		};
	});
};
*/

export const storeGet = <T>(store: IDBObjectStore, id: string) => {
	return new Promise<T | void>((resolve, reject) => {
		const request = store.get(id);

		request.onsuccess = () => {
			console.log(
				'Store:',
				store.name,
				'id:',
				id,
				'get:',
				request.result ? request.result : 'NOT-FOUND'
			);
			resolve(request.result);
		};

		request.onerror = (e) => {
			errorAdd(`Store: ${store.name} id: ${id} storeGet error: ${e}`);
			reject();
		};
	});
};

export const storePut = (store: IDBObjectStore, obj: any) => {
	return new Promise<void>((resolve, reject) => {
		const request = store.put(obj);

		request.onsuccess = () => {
			console.log('Store:', store.name, 'put:', obj);
			resolve();
		};

		request.onerror = (e) => {
			errorAdd(`Store: ${store.name} put: ${obj} error: ${e}`);
			reject();
		};
	});
};

export const storeAdd = (store: IDBObjectStore, obj: any) => {
	return new Promise<void>((resolve, reject) => {
		const request = store.add(obj);

		request.onsuccess = () => {
			console.log('Store:', store.name, 'add:', obj);
			resolve();
		};

		request.onerror = (e) => {
			errorAdd(`Store: ${store.name} add: ${obj} error: ${e}`);
			reject();
		};
	});
};

export const storeDel = (store: IDBObjectStore, id: IDBValidKey) => {
	return new Promise<void>((resolve, reject) => {
		const request = store.delete(id);

		request.onsuccess = () => {
			console.log('Store:', store.name, 'delete:', id);
			resolve();
		};

		request.onerror = (e) => {
			errorAdd(`Store: ${store.name} delete: ${id} error: ${e}`);
			reject();
		};
	});
};
