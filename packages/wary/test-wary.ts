import * as fs from 'fs';
import * as path from 'path';
import * as Promise from 'bluebird';
import * as wary from 'wary';

wary.it( 'should write to a file', {
	text: path.join(__dirname, 'fixtures', 'text.txt'),
}, (files) => {
	return new Promise((resolve, reject) => {
		fs.writeFile(files.text, 'Hello World', 'utf8', (err) => {
			if (err) return reject(err);
			fs.readFile(files.text, 'utf8', (err, data) => {
				if (err) return reject(err);
				if (data === 'Hello World') {
					resolve();
				} else {
					reject(new Error('Wrong data'));
				}
			});
		});
	});
});

wary.run()
.then(() => console.log('OK'));
