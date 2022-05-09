# React Calendify

_An Events Calendar library for React_

![npm publish](https://github.com/nabanita-sarkar/react-calendify/actions/workflows/npm-publish.yml/badge.svg) [![semantic-release: react](https://img.shields.io/badge/semantic--release-react-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

**⚠ CAUTION** - API may change drastically

The aim of this project to create highly customizable events based calendar for react. Although many feature-rich libraries like react-big-calendar, react-full-calendar, dayz exist, the lack of customizability can be a hindrance sometime.
It will have month, week and day view.

## Install

**npm**

```bash
npm i dayjs react-calendify
```

**yarn**

```bash
yarn add dayjs react-calendify
```

**pnpm**

```bash
pnpm add dayjs react-calendify
```

## Usage

Import the Calendar component

```js
import Calendar from "react-calendify";
```

Import the default `react-calendify/dist/style.css` file to your `.css` or `.js` or `.tsx` file

**CSS**

```css
@import "~react-calendify/dist/style.css";
```

**JS/TS**

```js
import "~react-calendify/dist/style.css";
```

> The ~ in the front might not be needed in case you are not using webpack. Consult with build system on how to import styles from node modules.

In the `.js`/`.jsx`/`.tsx` file

```jsx
function CustomCalendar () {
	return(
		<Calender type="weekly" events={[
			{start: '2022-05-09 09:56', end: '2022-05-18 13:38'}
		]}>
	)
}
```

## API

| props  | options                                                              |
| ------ | -------------------------------------------------------------------- |
| type   | "monthly", "weekly", "daily" // _currently only weekly view working_ |
| events | {start: string, end: string}[]                                       |
