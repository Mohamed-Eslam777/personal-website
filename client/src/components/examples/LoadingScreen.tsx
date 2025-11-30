import LoadingScreen from '../LoadingScreen';

export default function LoadingScreenExample() {
  return (
    <LoadingScreen 
      onComplete={() => console.log('Loading complete!')} 
      duration={3000}
    />
  );
}
