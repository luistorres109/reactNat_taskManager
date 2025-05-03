import { StatusBar, View } from 'react-native';
import Routes from './src/routes';
import { TasksProvider } from './src/hooks/tasks';

export default function App() {
    return (
        <TasksProvider>
            <View style={{flex: 1}}>
                <StatusBar translucent backgroundColor='transparent'/>
                <Routes />
            </View>
        </TasksProvider>
    );
}