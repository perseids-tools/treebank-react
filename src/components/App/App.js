import React from 'react';

import Treebank from '../Treebank';

const data = {
  nodes: [
    {
      id: '0',
      label: '[ROOT]',
    },
    {
      id: '1',
      label: 'Ἡροδότου',
    },
    {
      id: '2',
      label: 'Ἁλικαρνησσέος',
    },
    {
      id: '3',
      label: 'ἱστορίης',
    },
    {
      id: '4',
      label: 'ἀπόδεξις',
    },
    {
      id: '5',
      label: 'ἥδε',
    },
    {
      id: '6',
      label: ',',
    },
    {
      id: '7',
      label: 'ὡς',
    },
    {
      id: '8',
      label: 'μή',
    },
    {
      id: '9',
      label: '-τε',
    },
    {
      id: '10',
      label: 'τὰ',
    },
    {
      id: '11',
      label: 'γενόμενα',
    },
    {
      id: '12',
      label: 'ἐξ',
    },
    {
      id: '13',
      label: 'ἀνθρώπων',
    },
    {
      id: '14',
      label: 'τῷ',
    },
    {
      id: '15',
      label: 'χρόνῳ',
    },
    {
      id: '16',
      label: 'ἐξίτηλα',
    },
    {
      id: '17',
      label: 'γένηται',
    },
    {
      id: '18',
      label: ',',
    },
    {
      id: '19',
      label: 'μή',
    },
    {
      id: '20',
      label: '-τε',
    },
    {
      id: '21',
      label: 'ἔργα',
    },
    {
      id: '22',
      label: 'μεγάλα',
    },
    {
      id: '23',
      label: 'τε',
    },
    {
      id: '24',
      label: 'καὶ',
    },
    {
      id: '25',
      label: 'θωμαστά',
    },
    {
      id: '26',
      label: ',',
    },
    {
      id: '27',
      label: 'τὰ',
    },
    {
      id: '28',
      label: 'μὲν',
    },
    {
      id: '29',
      label: 'Ἕλλησι',
    },
    {
      id: '30',
      label: 'τὰ',
    },
    {
      id: '31',
      label: 'δὲ',
    },
    {
      id: '32',
      label: 'βαρβάροισι',
    },
    {
      id: '33',
      label: 'ἀποδεχθέντα',
    },
    {
      id: '34',
      label: ',',
    },
    {
      id: '35',
      label: 'ἀκλεᾶ',
    },
    {
      id: '36',
      label: 'γένηται',
    },
    {
      id: '37',
      label: ',',
    },
    {
      id: '38',
      label: 'τά',
    },
    {
      id: '39',
      label: 'τε',
    },
    {
      id: '40',
      label: 'ἄλλα',
    },
    {
      id: '41',
      label: 'καὶ',
    },
    {
      id: '42',
      label: 'δι᾽',
    },
    {
      id: '43',
      label: 'ἣν',
    },
    {
      id: '44',
      label: 'αἰτίην',
    },
    {
      id: '45',
      label: 'ἐπολέμησαν',
    },
    {
      id: '46',
      label: 'ἀλλήλοισι',
    },
    {
      id: '47',
      label: '.',
    },
    {
      id: '48',
      label: 'ἐστιν',
    },
    {
      id: '49',
      label: 'ἀποδεχθέντα',
    },
  ],
  links: [
    {
      source: '3',
      target: '1',
    },
    {
      source: '1',
      target: '2',
    },
    {
      source: '4',
      target: '3',
    },
    {
      source: '48',
      target: '4',
    },
    {
      source: '48',
      target: '5',
    },
    {
      source: '0',
      target: '6',
    },
    {
      source: '48',
      target: '7',
    },
    {
      source: '17',
      target: '8',
    },
    {
      source: '20',
      target: '9',
    },
    {
      source: '11',
      target: '10',
    },
    {
      source: '17',
      target: '11',
    },
    {
      source: '11',
      target: '12',
    },
    {
      source: '12',
      target: '13',
    },
    {
      source: '15',
      target: '14',
    },
    {
      source: '17',
      target: '15',
    },
    {
      source: '17',
      target: '16',
    },
    {
      source: '20',
      target: '17',
    },
    {
      source: '0',
      target: '18',
    },
    {
      source: '36',
      target: '19',
    },
    {
      source: '7',
      target: '20',
    },
    {
      source: '36',
      target: '21',
    },
    {
      source: '24',
      target: '22',
    },
    {
      source: '24',
      target: '23',
    },
    {
      source: '21',
      target: '24',
    },
    {
      source: '24',
      target: '25',
    },
    {
      source: '0',
      target: '26',
    },
    {
      source: '21',
      target: '27',
    },
    {
      source: '31',
      target: '28',
    },
    {
      source: '49',
      target: '29',
    },
    {
      source: '21',
      target: '30',
    },
    {
      source: '21',
      target: '31',
    },
    {
      source: '33',
      target: '32',
    },
    {
      source: '31',
      target: '33',
    },
    {
      source: '0',
      target: '34',
    },
    {
      source: '36',
      target: '35',
    },
    {
      source: '20',
      target: '36',
    },
    {
      source: '0',
      target: '37',
    },
    {
      source: '40',
      target: '38',
    },
    {
      source: '41',
      target: '39',
    },
    {
      source: '41',
      target: '40',
    },
    {
      source: '36',
      target: '41',
    },
    {
      source: '45',
      target: '42',
    },
    {
      source: '44',
      target: '43',
    },
    {
      source: '42',
      target: '44',
    },
    {
      source: '41',
      target: '45',
    },
    {
      source: '45',
      target: '46',
    },
    {
      source: '0',
      target: '47',
    },
    {
      source: '0',
      target: '48',
    },
    {
      source: '31',
      target: '49',
    },
  ],
};

const App = () => (
  <Treebank treebank={data} />
);

export default App;
