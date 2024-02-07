import { View } from "react-native";
import { Button, TextInput} from "react-native-paper";

export default function AddWorkout(){
    return(
        <View>
        <TextInput mode='outlined' label='Distance(km)'></TextInput>
        <TextInput mode='outlined' label='Duration (min)'></TextInput>
        <Button> Add workout</Button>
        </View>
        
    )
}