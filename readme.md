# node-create-read-update-delete-events

This sample repo will show you how to easily to get started with the Nylas Node.js SDK to manage calendars and events using the Nylas API v3.

## Setup

### System dependencies

- Node.js v16.x

### Gather environment variables

You'll need the following values:

```text
GRANT_ID = ""
SERVER_URL = ""
API_KEY = ""
```

Add the above values to a `.env` file. All values can be retrieved from the Nylas Dashboard.

### Install dependencies

```bash
$ npm i
```

## Usage

Run the script using following commands:

```bash
$ npm run build
$ node build/index.js
```

Comment out the specific functions to test out:
```
// List out all calendars
listCalendars()

// Create a new calendar
// createCalendar()

// Create a new calendar event
// createEvent()

// Update calendar event
// updateEvent()

// Destroy calendar event
// destroyEvent()
```

Be sure to provide the `.env` and specific variables required for each function.

When you run the script, you'll get all calendar information output in your terminal:

```bash
{
  calendars: {
    requestId: 'requestId',
    data: [
      # ...Calendar Data...
    ],
    next: [Function: bound ]
  }
}
```

## Learn more

Visit our [Nylas Node.js SDK documentation](https://developer.nylas.com/docs/developer-tools/sdk/node-sdk/) to learn more.
