import { createController } from "./create-controller.js"
import { getAllController } from "./get-all-controller.js"
import { getDetailController } from "./get-detail-controller.js"

export async function taskRoutes(app) {

    app.post('/task', createController)
    app.get('/tasks', getAllController)
    app.get('/tasks/:taskId', getDetailController)
}