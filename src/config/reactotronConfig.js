/* eslint-disable no-console */
import Reactotron, {
  asyncStorage,
  trackGlobalErrors,
  openInEditor,
  overlay,
  networking
} from 'reactotron-react-native';

const handleReactotron = () => {
  const tron = Reactotron.configure({ name: 'PlantManager' })
    .use(asyncStorage())
    .use(overlay())
    .use(trackGlobalErrors())
    .use(openInEditor())
    .use(networking())
    .useReactNative({})
    .connect();

  tron.clear();

  console.tron = tron;
  return tron;
};

const reactotron = __DEV__ ? handleReactotron() : undefined;

export default reactotron;
