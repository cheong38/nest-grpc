const path = require('path')

const GRPCClient = require('node-grpc-client')

const PROTO_PATH = path.join(__dirname, '../server/src/hero/hero.proto');

const myClient = new GRPCClient(
  PROTO_PATH,
  'hero',
  'HeroesService',
  'localhost:8580',
)

myClient.runService('FindOne', { id: 1 }, (error, res) => {
  if (error) {
    console.error(error)
    process.exit(1)
  }
  console.log('response', res)
  process.exit(0)
})
