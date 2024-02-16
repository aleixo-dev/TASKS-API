import { createController } from "./create-controller.js"
import { deleteController } from "./delete-controller.js"
import { getAllController } from "./get-all-controller.js"
import { getDetailController } from "./get-detail-controller.js"
import { updateController } from "./update-controller.js"

export async function taskRoutes(app) {

    app.post('/task', createController)
    app.get('/tasks', getAllController)
    app.get('/tasks/:taskId', getDetailController)
    app.delete('/task/:taskId', deleteController)
    app.put('/task/update/:taskId', updateController)
}