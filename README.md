# Day Planner

## User Story:
As business professional I would like an application that provides a planner for a typical work day. When I write an event into a given time block and save the event, a time and date stamp will indicate when the note was made. If I navigate away from the page, I need the events that have been noted to be written back into their appropriate time blocks. I also need the means to clear the events of a given day.
## Application:
To answer the needs of a business person in keeping accurate scheduling notes for a workday, the Day Planner application was written using HTML, CSS, and Javascript utilizing [moment.js](https://momentjs.com/) to keep the user interface up-to-date.
!["Day Planner Gif"](images\day_planner.gif)
## Challenges:
The main problem in developing this application was the manipulation of local storage. The process of saving to local storage is straight-forward enough, but retrieving it can become complicated. The order of keys and values stored is chronological, so if one plans their day by jumping around, or tries to add something to a time block later in the day,not only must the correct data be retrieved, it must also be ordered, so it ends up in the correct block upon refresh. This was solved using methods to both create an array from the existing storage and to put it in the correct order ot write into the blocks.
## Further Development:
In the future it would be valuable to update the code to include a way to delete individual events from a time block outside of deleting and storing the new data. Also, finding a way to successfully parse the data from local storage so that line breaks are observed, and quotation marks are eliminated. In the near future, the code will be updated so that empty strings are not stored if the user hits save too early or by accident.
## License:
[Standard MIT](LICENSE)