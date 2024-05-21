import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { AntDesign } from '@expo/vector-icons';
import CalendarIcon from '../../assets/images/cal.svg';
import BlueCalendarIcon from '../../assets/images/bluecal.svg';
import Avatar from '../../assets/images/avatar.svg';

const AttendanceScreen = () => {
  const [classOpen, setClassOpen] = useState(false);
  const [classValue, setClassValue] = useState(null);
  const [classItems, setClassItems] = useState([
    { label: 'Class 4', value: 'class4' },
    { label: 'Class 3', value: 'class3' },
    { label: 'Class 2', value: 'class2' },
  ]);

  const [sectionOpen, setSectionOpen] = useState(false);
  const [sectionValue, setSectionValue] = useState(null);
  const [sectionItems, setSectionItems] = useState([
    { label: 'Section A', value: 'sectionA' },
    { label: 'Section B', value: 'sectionB' },
  ]);

  const [subjectOpen, setSubjectOpen] = useState(false);
  const [subjectValue, setSubjectValue] = useState(null);
  const [subjectItems, setSubjectItems] = useState([
    { label: 'Math', value: 'math' },
    { label: 'Science', value: 'science' },
  ]);

  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Jennifer',
      roll: 181,
      attendance: { '1': 'P', '2': 'A', '3': 'A' },
    },
    {
      id: 2,
      name: 'Jamie',
      roll: 182,
      attendance: { '1': 'P', '2': 'P', '3': 'A' },
    },
    {
      id: 3,
      name: 'Kyle Jane',
      roll: 183,
      attendance: { '1': 'P', '2': 'P', '3': 'P' },
    },
    {
      id: 4,
      name: 'Kane Chris',
      roll: 184,
      attendance: { '1': 'P', '2': 'P', '3': 'A' },
    },
    {
      id: 5,
      name: 'Rose M',
      roll: 185,
      attendance: { '1': 'P', '2': 'P', '3': 'A' },
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            {/* <Image
              source={require('../../assets/images/leftarrow.png')}
              style={styles.arrowIcon}
            /> */}
            <AntDesign
              name='left'
              size={18}
              color='black'
              style={{ marginRight: 10 }}
            />

            <Text style={styles.title}>Attendance</Text>
          </View>
        </View>
        <CalendarIcon width={24} height={24} />
      </View>

      <View style={styles.dropdownContainer}>
        <DropDownPicker
          open={classOpen}
          value={classValue}
          items={classItems}
          setOpen={setClassOpen}
          setValue={setClassValue}
          setItems={setClassItems}
          containerStyle={styles.dropdown}
          style={styles.picker}
          dropDownContainerStyle={{
            ...styles.dropDown,
            zIndex: classOpen ? 3000 : 1000,
          }}
          placeholder='Class V'
          placeholderStyle={{
            fontFamily: 'IMed',
            fontSize: 13,
          }}
          listItemLabelStyle={{
            fontFamily: 'IMed',
            fontSize: 13,
          }}
          labelStyle={{
            fontFamily: 'IMed',
            fontSize: 13,
          }}
          zIndex={classOpen ? 3000 : 1000}
        />

        <DropDownPicker
          open={sectionOpen}
          value={sectionValue}
          items={sectionItems}
          setOpen={setSectionOpen}
          setValue={setSectionValue}
          setItems={setSectionItems}
          containerStyle={styles.dropdown}
          style={styles.picker}
          dropDownContainerStyle={{
            ...styles.dropDown,
            zIndex: sectionOpen ? 2000 : 1000,
          }}
          placeholder='Section B'
          placeholderStyle={{
            fontFamily: 'IMed',
            fontSize: 13,
          }}
          listItemLabelStyle={{
            fontFamily: 'IMed',
            fontSize: 13,
          }}
          labelStyle={{
            fontFamily: 'IMed',
            fontSize: 13,
          }}
          zIndex={sectionOpen ? 2000 : 1000}
        />

        <DropDownPicker
          open={subjectOpen}
          value={subjectValue}
          items={subjectItems}
          setOpen={setSubjectOpen}
          setValue={setSubjectValue}
          setItems={setSubjectItems}
          containerStyle={styles.dropdown}
          style={styles.picker}
          dropDownContainerStyle={{
            ...styles.dropDown,
            zIndex: subjectOpen ? 1000 : 500,
          }}
          placeholder='Maths'
          placeholderStyle={{
            fontFamily: 'IMed',
            fontSize: 13,
          }}
          listItemLabelStyle={{
            fontFamily: 'IMed',
            fontSize: 13,
          }}
          labelStyle={{
            fontFamily: 'IMed',
            fontSize: 13,
          }}
          zIndex={subjectOpen ? 1000 : 500}
        />
      </View>

      <View style={styles.gridSecContainer}>
        <View style={[styles.gridItemStu, styles.gridItemLarge]}>
          <View>
            <Text style={{ fontFamily: 'ISemi', fontSize: 14 }}>Student</Text>
          </View>
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.gridHeading}>FEB 1</Text>
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.gridHeading}>FEB 2</Text>
        </View>
        <View style={styles.gridItemParent}>
          <Text style={styles.gridHeader}>FEB 3</Text>
        </View>
      </View>
      <FlatList
        data={students}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.gridSecContainer}>
            <View style={[styles.gridItem, styles.gridItemLarge]}>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                {/* <Image
                  source={{ uri: 'https://picsum.photos/40' }}
                  style={styles.avatar}
                /> */}
                <Avatar width={40} height={40} style={styles.avatar} />
                <View style={{ marginRight: 20 }}>
                  <Text style={styles.studentName}>{item.name}</Text>
                  <Text style={styles.studentRoll}>Roll - {item.roll}</Text>
                </View>
                <View
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                >
                  {/* <Image
                    source={require('../../assets/images/calendar-03.png')}
                    style={styles.rightIcon}
                  /> */}
                  <BlueCalendarIcon width={20} height={20} />
                </View>
              </View>
            </View>
            <View style={styles.gridItem}>
              <Text
                style={{
                  fontFamily: 'IReg',
                  color: item.attendance['1'] === 'P' ? '#12B264' : 'red',
                }}
              >
                {item.attendance['1']}
              </Text>
            </View>
            <View style={styles.gridItem}>
              <Text
                style={{
                  fontFamily: 'IReg',
                  color: item.attendance['2'] === 'P' ? '#12B264' : 'red',
                }}
              >
                {item.attendance['2']}
              </Text>
            </View>
            <View style={styles.gridItem}>
              <Text
                style={{
                  fontFamily: 'IReg',
                  color: item.attendance['3'] === 'P' ? '#12B264' : 'red',
                }}
              >
                {item.attendance['3']}
              </Text>
            </View>
          </View>
        )}
      />
      <View style={styles.fixedBottomContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>MARK ATTENDANCE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#F8F8FF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  titleContainer: {
    width: '92%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'IBold',
  },
  icon: {
    width: 24,
    height: 24,
  },
  rightIcon: {
    width: 20,
    height: 20,
  },
  arrowIcon: {
    width: 7,
    height: 13,
    marginRight: 10,
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '102%',
    marginBottom: 15,
  },
  dropdown: {
    flex: 1,
    marginRight: 5,
  },
  picker: {
    borderColor: '#EAECF0',
    backgroundColor: '#F8F8FF',
  },
  dropDown: {
    borderColor: '#EAECF0',
  },
  studentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EAECF0',
  },
  studentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    borderRadius: 20,
    marginRight: 10,
    alignSelf: 'center',
  },
  studentDetails: {
    marginLeft: 10,
  },
  studentName: {
    fontFamily: 'ISemi',
    fontSize: 14,
    width: 74, // Set fixed width
  },
  studentRoll: {
    fontFamily: 'IMed',
    fontSize: 14,
    color: '#888',
  },
  attendanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  attendanceCell: {
    flex: 1,
    alignItems: 'center',
  },
  attendanceStatus: {
    fontFamily: 'IMed',
    fontSize: 16,
    marginHorizontal: 5,
  },
  present: {
    color: 'green',
  },
  absent: {
    color: 'red',
  },
  gridContainerMain: {
    flexDirection: 'row',
    borderRadius: 100,
    marginTop: 15,
  },
  gridContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  gridSecContainer: {
    flexDirection: 'row',
  },
  gridItem: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#EAECF0',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridItemStu: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#EAECF0',
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderTopLeftRadius: 4,
  },
  gridItemParent: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#EAECF0',
    padding: 10,
    alignItems: 'center',
    borderTopRightRadius: 4,
  },
  gridItemLarge: {
    flex: 5,
  },
  gridHeader: {
    fontFamily: 'ISemi',
    fontSize: 14,
    textAlign: 'center',
  },
  gridHeading: {
    fontFamily: 'ISemi',
    fontSize: 14,
    textAlign: 'center',
    color: '#6C6C74',
  },
  studentHeaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    borderTopLeftRadius: 3,
  },
  button: {
    position: 'absolute',
    bottom: 5,
    width: '100%',
    height: 50,
    backgroundColor: '#0075FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Urban',
    fontSize: 14,
  },
  fixedBottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    backgroundColor: '#fff', // White background
    width: '100%',
    height: 50,
  },
});

export default AttendanceScreen;
