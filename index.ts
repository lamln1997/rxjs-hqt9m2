import { of, fromEvent, interval } from 'rxjs'; 
import { map, take, mergeMap, concatMap, switchMap, exhaustMap } from 'rxjs/operators';


const click = fromEvent(document, 'click');
const observable = interval(1000).pipe(take(10));

// megerMap 
// click.pipe(
//   mergeMap(() => {
//     return observable;
//   })
// ).subscribe(res => {
//   console.log(res, 'example mergeMap');
// })



// concat map: khi 1 request đang thực hiên, request 2 được gọi.request 2 sẽ được thực hiện khi request 1 hoàn thành

// click.pipe(concatMap(() => {
//   return observable;
// })).subscribe(res => {
//   console.log(res, 'concatMap');
// })


// switchMap: khi 1 request đang thực hiện , request 2 được gọi, request 1 sẽ dừng và request 2 sẽ được thực hiện
click.pipe(switchMap(() => {
  return observable;
})).subscribe(res => {
  console.log(res, 'switchMap');
})


// exhaustMap: khi 1 request đang thực hiện, request 2 được gọi, chỉ thực hiện request 1
// click.pipe(
//   exhaustMap(() => {
//     return observable;
//   })
// ).subscribe(res => {
//   console.log(res, 'exhaustMap')
// })