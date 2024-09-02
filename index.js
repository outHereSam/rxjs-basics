import { of, from, interval, take } from "rxjs";

// Task 1: Creating and Subscribing to an Observable with of:
const numObservable = of(1, 2, 3, 4, 5);

numObservable.subscribe({
  next: (value) => console.log("Emitted value:", value),
  complete: () => console.log("Observable completed"),
});

// Task 2: Working with from
const colors = ["Teal", "Turquoise", "Blue", "Black"];

const colorObservable = from(colors);

colorObservable.subscribe({
  next: (value) => console.log("Emitted color:", value),
  complete: () => console.log("Observable completed"),
});

// Task 3: Using interval
const observable = interval(1000).pipe(take(5));

observable.subscribe({
  next: (value) =>
    console.log(
      `Emitted value: ${value}, Timestamp: ${new Date().toISOString()}`
    ),
  complete: () => console.log("Observable completed"),
});
