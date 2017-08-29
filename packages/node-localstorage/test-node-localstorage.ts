import { LocalStorage } from 'node-localstorage';


const ls = new LocalStorage('/tmp', Infinity);

ls.setItem('x', '1');
console.log(ls.getItem('x') === '1');
ls.clear();
