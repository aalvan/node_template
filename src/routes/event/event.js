import eventActions from '../../actions/event/event'

exports.getAllEvents = (ctx) => {
    ctx.body = eventActions.getEvents()
    return ctx
}

exports.createEvent = (ctx) => {
    eventActions.addEvent(ctx.request.body)
    const data = eventActions.getIncidents(ctx.request.body, ctx.params.time)
    ctx.body = {data: data,
                status: 200
    }
   return ctx
}

