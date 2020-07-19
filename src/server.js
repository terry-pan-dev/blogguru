import { Server } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
    let server = new Server({
        environment,

        routes() {
            this.namespace = "api"

            this.get("/trendings", () => [
                "science",
                "technology",
                "politics",
                "sports",
                "movies",
                "music",
                "entertainment",
                "docker",
                "hibernetes",
                "ansible",
                "chef",
                "git",
                "puppet",
                "selenium",
                "education",
                "PHP",
                "history",
                "life",
                "stock",
                "vue",
                "react",
                "blockchain",
                "travel"
            ])
        },
    })

    return server
}