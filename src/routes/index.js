import Router from 'koa-router'
import getHealth from './health/health'
import events from './event/event'

const router = new Router()

router.get('/health', getHealth)
router.get('/api/event/threshold', events.getAllEvents)
router.post('/api/event/threshold/:time', events.createEvent)

export default router
