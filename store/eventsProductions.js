import heathers from '../static/events-productions/heathers.js'
import events from '../static/events-productions/events.js'
import peterStarcatcher from '../static/events-productions/peter-starcatcher.js'
import roseInAmerica from '../static/events-productions/rose-in-america.js'
import inTheHeights from '../static/events-productions/in-the-heights.js'

export const state = () => ({
  eventsProds: [
    heathers,
    events,
    peterStarcatcher,
    roseInAmerica,
    inTheHeights
  ]
})
