import RenderObj from './render.js';

let Render = new RenderObj;

const router = new Navigo('/');

router.on('/', function () {
    Render.renderHello();
});
router.on('/about', function () {
    Render.Index();
});
router.on(/(.*)/, ({ data }) => {
    console.log(data);
  });
router.resolve();