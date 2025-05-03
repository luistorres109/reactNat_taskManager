import React, { useState } from 'react';
import { ScrollView, Modal, View, TouchableOpacity, Text } from 'react-native';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { RFValue } from 'react-native-responsive-fontsize';

import {
  Container, Content, Header, OpaqueButton, IconContainer, Task, Title, SubTitle,
  TaskTitle, TaskDescription, TaskDescriptionContainer, TitleInput, DescriptionInput,
  PriorityFlag, Background, ModalContainer, AddTaskButton, AddTaskButtonText,
  HeaderIcon as HeaderIconStyle, HeaderModal as HeaderModalStyle, ButtonRow,
  SortModalContainer, SortModalContent, SortModalTitle, SortOptionButton, SortOptionText, SortCancelButton, SortCancelText, CancelTaskButton, CancelTaskButtonText
} from './styles';

import { ITask, IIcon } from '../../interfaces/ITask';
import CPrioritySelect from '../../components/CPrioritySelect';
import CIconSelect from '../../components/CIconSelect';
import { useTasks } from '../../hooks/tasks';

const priorityData = {
  1: { color: '#618DDB', icon: 'playlist-check' },
  2: { color: '#9BCA3E', icon: 'bell-outline' },
  3: { color: '#EFE044', icon: 'megaphone-outline' },
  4: { color: '#FFB92A', icon: 'priority-high' },
  5: { color: '#ED5314', icon: 'alert-outline' },
};

const sortOptions = [
  { label: 'Priority', value: 'priority' },
  { label: 'ID', value: 'id' },
  { label: 'Created lastly', value: 'created' },
  { label: 'Title', value: 'title' },
];

export default function SHome() {
  const navigator: NavigationProp<ParamListBase> = useNavigation();
  const { tasks, addTask, sortTasks, reverseOrder } = useTasks();

  const [modalVisible, setModalVisible] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newPriority, setNewPriority] = useState<number>(1);
  const [newIcon, setNewIcon] = useState<IIcon>({ name: 'text-box-outline', color: '#2196F3' });
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [currentSortOption, setCurrentSortOption] = useState<'priority' | 'id' | 'created' | 'title'>('created');

  function handleAddTask() {
    const newTask: ITask = {
      id: Date.now(),
      title: newTitle,
      description: newDescription,
      priority: newPriority,
      icon: newIcon,
    };

    addTask(newTask);
    setNewTitle('');
    setNewDescription('');
    setNewPriority(1);
    setNewIcon({ name: 'text-box-outline', color: '#2196F3' });
    setModalVisible(false);
  }

  const handleSort = (criteria: 'priority' | 'id' | 'created' | 'title') => {
    sortTasks(criteria);
    setCurrentSortOption(criteria);
    setSortModalVisible(false);
  };

  function handleCancelTask() {
    setNewTitle('');
    setNewDescription('');
    setNewPriority(1);
    setNewIcon({ name: 'text-box-outline', color: '#2196F3' });
    setModalVisible(false);
  }

  return (
    <Container>
      <Header>
        <IconContainer>
          <MaterialCommunityIcons name="clipboard-list-outline" size={RFValue(24)} color="#618DDB" />
        </IconContainer>
        <Title>My Tasks</Title>
        <OpaqueButton onPress={() => setModalVisible(true)}>
          <HeaderIconStyle>
            <MaterialIcons name="add-task" size={RFValue(30)} color="#90EE90" />
          </HeaderIconStyle>
        </OpaqueButton>
      </Header>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: RFValue(15), marginTop: RFValue(10), marginBottom: RFValue(5) }}>
        <TouchableOpacity onPress={() => setSortModalVisible(true)}>
          <Text style={{ fontSize: RFValue(12), fontWeight: 'bold', color: '#618DDB' }}> Order by: {sortOptions.find(opt => opt.value === currentSortOption)?.label}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={reverseOrder}>
          <MaterialIcons name="swap-vert" size={RFValue(24)} color="#618DDB" />
        </TouchableOpacity>
      </View>

      <Content>
        <ScrollView contentContainerStyle={{ padding: RFValue(20), gap: RFValue(10) }}>
          {tasks.map((item) => (
            <Task key={item.id} onPress={() => navigator.navigate('Task', { item })}>
              <IconContainer style={{
                borderRadius: RFValue(12),
                width: RFValue(30),
                height: RFValue(30),
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <MaterialCommunityIcons name={item.icon.name} size={RFValue(18)} color={item.icon.color} />
              </IconContainer>
              <TaskDescriptionContainer>
                <TaskTitle>{item.title}</TaskTitle>
                <TaskDescription>{item.description}</TaskDescription>
              </TaskDescriptionContainer>
              <PriorityFlag style={{ backgroundColor: priorityData[item.priority]?.color || '#E53935' }}>
                <MaterialCommunityIcons name={priorityData[item.priority]?.icon} size={RFValue(20)} color="#FFF" />
              </PriorityFlag>
            </Task>
          ))}
        </ScrollView>
      </Content>

      <Modal visible={modalVisible} animationType="fade" transparent statusBarTranslucent>
        <Background>
          <ModalContainer>
            <HeaderModalStyle>
              <Title>New Task</Title>
            </HeaderModalStyle>

            <SubTitle>Title</SubTitle>
            <TitleInput cursorColor="#777" value={newTitle} onChangeText={setNewTitle} />

            <CIconSelect setValue={setNewIcon} value={newIcon} />
            <CPrioritySelect setValue={setNewPriority} value={newPriority} />

            <SubTitle>Description</SubTitle>
            <DescriptionInput multiline cursorColor="#777" value={newDescription} onChangeText={setNewDescription} />

            <ButtonRow>
              <CancelTaskButton onPress={handleCancelTask} style={{ flex: 1 }}>
                <CancelTaskButtonText>Cancel</CancelTaskButtonText>
                <MaterialIcons name="cancel" size={RFValue(24)} color="#FFF" />
              </CancelTaskButton>

              <AddTaskButton onPress={handleAddTask} style={{ flex: 1 }}>
                <AddTaskButtonText>Add Task</AddTaskButtonText>
                <MaterialIcons name="add-task" size={RFValue(24)} color="#FFF" />
              </AddTaskButton>
            </ButtonRow>
          </ModalContainer>
        </Background>
      </Modal>

      <Modal visible={sortModalVisible} transparent animationType="fade">
      <SortModalContainer>
        <SortModalContent>
          <SortModalTitle>Order by</SortModalTitle>
          {sortOptions.map(option => (
            <SortOptionButton key={option.value} onPress={() => handleSort(option.value as any)}>
              <SortOptionText>{option.label}</SortOptionText>
            </SortOptionButton>
          ))}
          <SortCancelButton onPress={() => setSortModalVisible(false)}>
            <SortCancelText>Cancel</SortCancelText>
          </SortCancelButton>
        </SortModalContent>
      </SortModalContainer>
    </Modal>
    </Container>
  );
}