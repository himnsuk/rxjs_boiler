import $ from 'jquery';
import Rx from 'rxjs/Rx';

// const btn = $('#btn');
// const input = $('#input');
// const outputInput = $('#outputInput');
// const outputMouse = $('#outputMouse');

// const btnStream$ = Rx.Observable.fromEvent(btn, 'click');

// btnStream$.subscribe((e) => {
//   console.log('Clicked');
// }, (error) => {
//   console.log(error);
// }, () => {
//   console.log('Completed')
// })

// const inputStream$ = Rx.Observable.fromEvent(input, 'keyup');

// inputStream$.subscribe((e) => {
//   console.log(e.currentTarget.value);
//   outputInput.html(e.currentTarget.value);
// }, (error) => {
//   console.log(error);
// }, () => {
//   console.log('Completed')
// })

// const moveStream$ = Rx.Observable.fromEvent(document, 'mousemove');

// moveStream$.subscribe((e) => {
//   console.log(e);
//   outputMouse.html('<h1>X' + e.clientX + '   Y: ' + e.clientY +'</h1>');
// }, (error) => {
//   console.log(error);
// }, () => {
//   console.log('Completed')
// })

/** Observable from arrays */


// const numbers = [23, 34, 45, 22];

// const numbers$ = Rx.Observable.from(numbers);

// numbers$.subscribe(v => {
//   $('#numbers').append(`<h4>${v}</h4>`)
// },
//   (error) => {
//     console.log(error);
//   }, () => {
//     console.log('Completed');
//   });

// const posts = [
//   { title: 'Post one', body: 'This is the body' },
//   { title: 'Post two', body: 'This is the body' },
//   { title: 'Post three', body: 'This is the body' },
//   { title: 'Post four', body: 'This is the body' },
// ];

// const posts$ = Rx.Observable.from(posts);

// posts$.subscribe(
//   post => {
//     $('#posts').append(`<li><h3>${post.title}</h3><p>${post.body}</p></li>`)
//   },
//   error => {
//     console.log(error);
//   },
//   _ => {
//     console.log('Completed posts');
//   }
// )


/** Working with sets*/

// const set = new Set(['Hello', 44, { title: 'My title' }]);

// const setStream$ = Rx.Observable.from(set);

// setStream$.subscribe(
//   resp => console.log(resp),
//   err => console.log(err),
//   _ => console.log('Completed set Operation')
// )

/** Working with maps*/

// const map = new Map([[1,2], [3,4], [5,6]]);

// const mapStream$ = Rx.Observable.from(map);

// mapStream$.subscribe(
//   resp => console.log(resp),
//   err => console.log(err),
//   _ => console.log('Completed set Operation')
// )

/**Observable from scratch */

// const source$ = new Rx.Observable(observe => {
//   console.log('Creating Observable');
//   observe.next(1);
//   observe.next(2);
//   observe.next(3);
  
//   observe.error(new Error('Error: Something went wrong'));

//   observe.next(4);
//   setTimeout(_ => {
//     observe.next('Yet another observe');
//     observe.complete(); 
//   })
// });

// source$
//   .catch(err => Rx.Observable.of(err))
//   .subscribe(
//   x => console.log(x),
//   err => console.log(err),
//   _ => console.log('Completed scatch observable')
// );

/** Observable from A Promise */

// const myPromise = new Promise((resolve, reject) => {
//   console.log('Creating Promise');
//   setTimeout(() => {
//     resolve('Hello from Promise Himanshu');
//   }, 3000);
// });

// // myPromise.then(x => console.log(x));

// const source$ = Rx.Observable.fromPromise(myPromise);

// source$.subscribe(x => console.log(x));


// function getUser(username){
//   return $.ajax({
//     url: 'https://api.github.com/users/' + username,
//     dataType: 'jsonp'
//   }).promise();
// }

// Rx.Observable.fromPromise(getUser('himnsuk'))
//   .subscribe(x => console.log(x));

/** Using Interval */

// const source$ = Rx.Observable.interval(1000)
//   .take(5);

// source$.subscribe(
//   x => console.log(new Date()),
//   err => console.log(err),
//   _ => console.log('Completed interval obserbable')
// );

/** Using Timer */

// const source$ = Rx.Observable.timer(5000, 2000)
//   .take(5);

// source$.subscribe(
//   x => console.log(x),
//   err => console.log(err),
//   _ => console.log('Completed timer Observable')
// );

/** Using Range */

// const source$ = Rx.Observable.range(0, 10)

// source$.subscribe(
//   x => console.log(x),
//   err => console.log(err),
//   _ => console.log('Completed range Observable')
// );

/** Map and Pluck */

// const source$ = Rx.Observable.interval(1000)
//   .take(10)
//   .map(v => v*2)
// source$.map(v => v*v).subscribe( v => console.log(v))

// const source$ = Rx.Observable.from(['John', 'tom', 'Shawn']);

// source$.map(v => 'I am ' +v.toUpperCase()).subscribe(v => console.log(v))

// const user = [
//   { name: 'Will', age: 34 },
//   { name: 'Mike', age: 24 },
//   { name: 'Paul', age: 44 },
// ]

// const users$ = Rx.Observable.from(user);

// users$.pluck('name').map(v => v.toUpperCase()).subscribe(x => console.log(x));

/** Merge and concat */

// Rx.Observable.of('Hello')
//   .merge(Rx.Observable.of('Everyone'))
//   .subscribe(x => console.log(x));

// Rx.Observable.interval(2000)
//   .merge(Rx.Observable.interval(500))
//   .take(25)
//   .subscribe(x => console.log(x))

// const source1$ = Rx.Observable.interval(2000).map(v => 'Merge1 ' + v);
// const source2$ = Rx.Observable.interval(500).map(v => 'Merge2 ' + v);
// Rx.Observable.merge(source1$, source2$)
//   .take(25)
//   .subscribe(x => console.log(x));

/** difference between merge and concat is concat comes one after another */

// const source1$ = Rx.Observable.range(0, 25).map(v => 'Source1 ' + v);
// const source2$ = Rx.Observable.range(50, 10).map(v => 'Source2 ' + v);
// Rx.Observable.concat(source1$, source2$)
//   .subscribe(x => console.log(x));

/** MergeMap && SwitchMap */

// Rx.Observable.of('Hello')
//   .subscribe(x => {
//     Rx.Observable.of(x + ' Everyone')
//       .subscribe(v => console.log(x ,v))
//   })

// Rx.Observable.of('Hello')
//   .mergeMap( v => Rx.Observable.of(v + ' Everyone'))
//   .subscribe(x => console.log(x))

function getUser(username){
  return $.ajax({
    url: 'https://api.github.com/users/' + username,
    dataType: 'jsonp'
  }).promise();
}

const input = $('#input');

// Rx.Observable.fromPromise(getUser('himnsuk'))
//   .subscribe(x => console.log(x));

const inputSource$ = Rx.Observable.fromEvent(input, 'keyup')
  .map(e => e.target.value)
  .switchMap(v => {
    return Rx.Observable.fromPromise(getUser(v))
  })

inputSource$.subscribe(x => console.log(x));
