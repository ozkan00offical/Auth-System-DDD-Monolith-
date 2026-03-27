import app from "./app";

const server = async (port: number) => {
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })
}

export default server;