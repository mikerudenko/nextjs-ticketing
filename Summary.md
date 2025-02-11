### Code Changes Summary

#### Context Logic

- **Ticketing Context**:

  - I moved all seat selection logic to ticketing-context.tsx.
  - There is logic that differentiates between randomly selected seats and manually selected seats.
  - I would chose to use enums instead of strings for seat states (`available`, `selected`).

- **App Context**:
  - Theme switching logic is moved to `app-context.tsx`.
  - I wrapped all localStorage calls in try-catch blocks to handle browsers where localStorage is not available.
  - If we need to persist the theme toggle across browsers, then I would separate collection in the database called `user_meta` to store user-specific metadata, including theme type, and using an API call to fetch this data.

#### React Optimization

- All functions and aggregation results are not wrapped in `useMemo`/`useCallback` due to React 19's support for the React compiler, making these optimizations unnecessary.

#### Styling

- I moved all styles to a separate file for cleaner code organization.

#### Eslint Issues

- Eslint issues are out of the task scope so I didn't touch it.

#### Design Decisions

- Quick suggestion: enums instead of strings for seat states are much better.
- I suggested making a server request after each seat selection to book the seat and check if it is not booked by anyone else.
- Also need to implement a timer to hold a seat booking for a limited time (e.g., 15 minutes).
- And would be nice to use long-polling to get all available seats from the server and update the UI accordingly.
