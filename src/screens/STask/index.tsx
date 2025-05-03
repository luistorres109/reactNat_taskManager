import React, { useState } from 'react';
import { ScrollView, View } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Foundation from '@expo/vector-icons/Foundation';
import { RFValue } from "react-native-responsive-fontsize";
import { NavigationProp, ParamListBase, useNavigation, useRoute } from '@react-navigation/native';

import {
  Container, Content, Header, PriorityContainer, Priority, IconContainer,
  Title, SubTitle, TitleInput, DescriptionInput, AddTaskButton, AddTaskButtonText
} from './styles';

import { ITask, IIcon } from '../../interfaces/ITask';
import CIconSelect from '../../components/CIconSelect';
import { useTasks } from '../../hooks/tasks';

interface Params {
  item: ITask;
}

export default function STask() {
  const { item } = useRoute().params as Params;
  const navigator: NavigationProp<ParamListBase> = useNavigation();
  const { updateTask, deleteTask } = useTasks();

  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description || '');
  const [priority, setPriority] = useState(item.priority);
  const [icon, setIcon] = useState<IIcon>(item.icon);

  function handleSave() {
    updateTask({ ...item, title, description, priority, icon });
    navigator.goBack();
  }

  function handleDelete() {
    deleteTask(item.id);
    navigator.goBack();
  }

  return (
    <Container>
      <Header>
        <IconContainer onPress={() => navigator.goBack()}>
          <MaterialIcons name="chevron-left" size={RFValue(30)} color="black" />
        </IconContainer>
        <Title>Edit Task</Title>
      </Header>

      <Content>
        <ScrollView contentContainerStyle={{ padding: RFValue(20), gap: RFValue(10) }}>
          <SubTitle>Title</SubTitle>
          <TitleInput cursorColor="#777" value={title} onChangeText={setTitle} />

          <SubTitle>Icon</SubTitle>
          <CIconSelect setValue={setIcon} value={icon} />

          <SubTitle>Priority</SubTitle>
          <PriorityContainer>
            <Priority color="#618DDB" onPress={() => setPriority(1)}>
              <MaterialIcons name="task-alt" size={RFValue(24)} color="#FFF" />
            </Priority>
            <Priority color="#9BCA3E" onPress={() => setPriority(2)}>
              <MaterialCommunityIcons name="bell-outline" size={RFValue(24)} color="#FFF" />
            </Priority>
            <Priority color="#EFE044" onPress={() => setPriority(3)}>
              <Foundation name="megaphone" size={RFValue(24)} color="#FFF" />
            </Priority>
            <Priority color="#FFB92A" onPress={() => setPriority(4)}>
              <MaterialIcons name="priority-high" size={RFValue(24)} color="#FFF" />
            </Priority>
            <Priority color="#ED5314" onPress={() => setPriority(5)}>
              <MaterialCommunityIcons name="alert-outline" size={RFValue(24)} color="#FFF" />
            </Priority>
          </PriorityContainer>

          <SubTitle>Description</SubTitle>
          <DescriptionInput
            multiline
            cursorColor="#777"
            value={description}
            onChangeText={setDescription}
          />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <AddTaskButton onPress={handleDelete} style={{ backgroundColor: '#F44336', width: '48%' }}>
              <AddTaskButtonText>Delete</AddTaskButtonText>
              <MaterialIcons name="delete" size={RFValue(24)} color="#FFF" />
            </AddTaskButton>

            <AddTaskButton onPress={handleSave} style={{ backgroundColor: '#4CAF50', width: '48%' }}>
              <AddTaskButtonText>Save</AddTaskButtonText>
              <MaterialIcons name="save" size={RFValue(24)} color="#FFF" />
            </AddTaskButton>
          </View>
        </ScrollView>
      </Content>
    </Container>
  );
}