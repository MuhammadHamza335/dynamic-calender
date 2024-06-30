# Dynamic Calender

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Features

This project contains three main screens:

1. **Ad-hoc Data Screen**:

   - Displays ad-hoc data in a table.
   - Features include sorting, hiding, filtering, different views, and pagination.

2. **Periodic Data Screen**:

   - Displays a complete calendar of the month.
   - Highlights the current date.
   - Shows tasks in the respective date cells.
   - On hover, displays the complete description of the task.

3. **Routine Data Screen**:
   - Displays routine data in a week calendar format.
   - Tasks are shown as per their row number in the data.
   - On hover, a yellow tooltip opens displaying all task information.
   - Highlights the column of the current date.

## Libraries Used

- **Material-UI**: For various components like Grid, Typography, Buttons, Paper, Tooltip, etc.
- **date-fns**: For handling different date formats and converting dates to other formats.

## Code Structure

### Inside `src` Folder

- **pages**: Contains the main page files:

  - `Adhoc.js`
  - `Calendar.js`
  - `WeekCalendar.js`

- **components**: Contains the code for components used in the pages.

- **utils**: Contains all the utility functions used in the project.

  - `utils.js`: Contains all the utility functions used in components.

- **data**: Contains data files used in the main app:
  - `AdhocData.js`: Contains the data for the ad-hoc screen, stored and exported as variable `adhocData`.
  - `PeriodicData.js`: Contains the data for the periodic table screen, stored and exported as variable `periodicData`.
  - `RoutineData.js`: Contains the data for the routine table screen, stored and exported as variable `routineData`.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
