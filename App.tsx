import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactLists from './components/ContactLists';


function App() {
  return (
    <SafeAreaView>
      <ScrollView>
          <FlatCards />
          <ElevatedCards />
          <FancyCard />
          <ActionCard />
          <ContactLists />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;