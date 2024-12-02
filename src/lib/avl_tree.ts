import { AVLTree } from 'sigmastate-js';

/**
 * Создание нового AVL-дерева, добавление ключей-значений и возвращение дерева.
 * @param entries массив пар ключ-значение для добавления в дерево
 * @returns созданное AVL-дерево
 */
export function createAndPopulateAVLTree(entries: [string, string][]): AVLTree {
	// Создаем новое AVL-дерево
	const tree = new AVLTree();

	// Добавляем ключи и значения
	entries.forEach(([key, value]) => {
		tree.insert(key, value);
	});

	return tree;
}

/**
 * Получение значения по ключу из AVL-дерева.
 * @param tree экземпляр AVL-дерева
 * @param key ключ для поиска
 * @returns значение, связанное с ключом
 */
export function getValueFromAVLTree(tree: AVLTree, key: string): string | undefined {
	return tree.get(key);
}

/**
 * Сериализация AVL-дерева в байты.
 * @param tree экземпляр AVL-дерева
 * @returns сериализованное дерево в виде байтов
 */
export function serializeAVLTree(tree: AVLTree): Uint8Array {
	return tree.toBytes();
}

/**
 * Десериализация байтов в AVL-дерево.
 * @param bytes байты, представляющие AVL-дерево
 * @returns десериализованное дерево
 */
export function deserializeAVLTree(bytes: Uint8Array): AVLTree {
	return AVLTree.fromBytes(bytes);
}

// Пример использования
(async () => {
	// Создаем дерево и добавляем данные
	const entries: [string, string][] = [
		['key1', 'value1'],
		['key2', 'value2'],
		['key3', 'value3']
	];
	const tree = createAndPopulateAVLTree(entries);

	console.log('Текущее значение для key2:', getValueFromAVLTree(tree, 'key2'));

	// Сериализация дерева
	const serializedTree = serializeAVLTree(tree);
	console.log('Сериализованное дерево:', serializedTree);

	// Десериализация дерева
	const deserializedTree = deserializeAVLTree(serializedTree);
	console.log('Восстановленное значение для key2:', getValueFromAVLTree(deserializedTree, 'key2'));
})();
