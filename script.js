import * as THREE from "./three/src/Three";

const CONSTANTS = {
  windowWidth: window.innerWidth,
  windowHeight: window.innerHeight,
};

console.log(CONSTANTS);

const SCENE = new THREE.Scene();

const CAMERA = new THREE.PerspectiveCamera(
  75,
  CONSTANTS.windowWidth / CONSTANTS.windowHeight,
  0.1,
  1000
);
SCENE.add(CAMERA);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(CONSTANTS.windowWidth, CONSTANTS.windowHeight);
document.body.appendChild(renderer.domElement);

//

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });

const cube = new THREE.Mesh(geometry, material);

SCENE.add(cube);

CAMERA.position.z = 2;

//

function animate() {
  requestAnimationFrame(animate);
  renderer.render(SCENE, CAMERA);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
//   cube.rotation.z += 0.01;
}
animate();
