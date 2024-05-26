interface KeyValuePair<Key, Value> {
  key: Key;
  value: Value;
}

let kvp: KeyValuePair<string, number> = {
  key: 'one',
  value: 1,
}