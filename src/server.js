import { Server, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
    let server = new Server({
        environment,

        models: {
            trending: Model,
        },

        seeds(server) {
            server.create("trending", { tag: "science" })
            server.create("trending", { tag: "technology" })
            server.create("trending", { tag: "politics" })
            server.create("trending", { tag: "sports" })
            server.create("trending", { tag: "movies" })
            server.create("trending", { tag: "music" })
            server.create("trending", { tag: "entertainment" })
        },

        routes() {
            this.namespace = "api"

            this.get("/trendings", (schema) => {
                return schema.trendings.all()
            })
        },
    })

    return server
}