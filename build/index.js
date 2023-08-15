import 'dotenv/config';
import Nylas from "nylas";
const NylasConfig = {
    apiKey: process.env.API_KEY,
    serverUrl: process.env.SERVER_URL,
};
const nylas = new Nylas(NylasConfig);
const listCalendars = async () => {
    const calendars = await nylas.calendars.list({
        identifier: process.env.GRANT_ID,
    });
    console.log({ calendars });
};
const createCalendar = async () => {
    const newCalendar = await nylas.calendars.create({
        identifier: process.env.GRANT_ID,
        requestBody: {
            name: 'new calendar name',
            description: 'calendar description',
            location: '',
            timezone: '',
            metadata: {}
        }
    });
    console.log({ newCalendar });
};
const createEvent = async () => {
    const newCalendar = {
        data: {
            id: 'calendarId',
        }
    };
    const now = Math.floor(Date.now() / 1000);
    const eventTime = {
        startTime: now,
        endTime: now + 3600,
        startTimezone: 'America/Toronto',
        endTimezone: 'America/Toronto'
    };
    const newCalendarEvent = await nylas.events.create({
        identifier: process.env.GRANT_ID,
        queryParams: {
            calendarId: newCalendar.data.id,
        },
        requestBody: {
            when: eventTime,
            title: 'new event title',
            participants: [{
                    email: 'email',
                    status: 'maybe'
                }]
        }
    });
    console.log({ newCalendarEvent });
};
const updateEvent = async () => {
    const newEvent = {
        data: {
            id: 'eventId',
        }
    };
    const newCalendar = {
        data: {
            id: 'calendarId',
        }
    };
    const eventUpdates = {
        title: 'updated calendar event title'
    };
    const updatedCalendarEvent = await nylas.events.update({
        identifier: process.env.GRANT_ID,
        eventId: newEvent.data.id,
        queryParams: {
            calendarId: newCalendar.data.id,
        },
        requestBody: eventUpdates,
    });
    console.log({ updatedCalendarEvent });
};
const destroyEvent = async () => {
    const newEvent = {
        data: {
            id: 'eventId',
        }
    };
    const newCalendar = {
        data: {
            id: 'calendarId',
        }
    };
    const response = await nylas.events.destroy({
        identifier: process.env.GRANT_ID,
        eventId: newEvent.data.id,
        queryParams: {
            calendarId: newCalendar.data.id,
        }
    });
    console.log({ response });
};
// List out all calendars
listCalendars();
// Create a new calendar
// createCalendar()
// Create a new calendar event
// createEvent()
// Update calendar event
// updateEvent()
// Destroy calendar event
// destroyEvent()
