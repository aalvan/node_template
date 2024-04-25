let events = []
const incidents = {data:[]}
exports.getEvents = () => {
    return events
}

exports.addEvent = (eventData) => {
    const event = {
        event_id: eventData.event_id,
        context: eventData.context,
        metadata: eventData.metadata,
        timestamp: eventData.timestamp
    }
    /*
    if (events.length > 0){
        events.forEach((element)=>{
            if(eventData.timestamp === element.timestamp){

            }
        })
    }
    else {
        events.push(event)
    }*/
}

exports.getIncidents = (eventData, timeDiff) => {
    const response = []

    const events = exports.getEvents()
    events.forEach((element) => {
        let diff = Math.abs(element.timestamp - eventData.timestamp)
        let secs = Math.round(diff / 1000)
        if(eventData.metadata === element.metadata && secs <= timeDiff){
            response.push(element)
        }
    })
    /*
    const incident_response = {
        incident_id: Math.random(),
        incidents:git

    }*/
    //incidents.data.push()

    return response
}

Math.round(Date.now() / 1000)