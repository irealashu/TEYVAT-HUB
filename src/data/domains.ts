import { DomainEntry } from '../types';

export const DOMAINS_DATA: DomainEntry[] = [
  {
    id: 'blazing-ruins',
    name: 'Blazing Ruins',
    region: 'Natlan',
    type: 'Talent Books',
    location: 'Basin of Unnumbered Flames, Natlan',
    schedule: {
      Monday: ['Teachings of Contention', 'Guide to Contention', 'Philosophies of Contention'],
      Tuesday: ['Teachings of Kindling', 'Guide to Kindling', 'Philosophies of Kindling'],
      Wednesday: ['Teachings of Conflict', 'Guide to Conflict', 'Philosophies of Conflict'],
      Thursday: ['Teachings of Contention', 'Guide to Contention', 'Philosophies of Contention'],
      Friday: ['Teachings of Kindling', 'Guide to Kindling', 'Philosophies of Kindling'],
      Saturday: ['Teachings of Conflict', 'Guide to Conflict', 'Philosophies of Conflict'],
      Sunday: ['All Natlan Talent Books (Contention, Kindling, Conflict)']
    },
    drops: ['Teachings of Contention', 'Teachings of Kindling', 'Teachings of Conflict']
  },
  {
    id: 'ancient-lookout',
    name: 'Ancient Lookout',
    region: 'Natlan',
    type: 'Weapon Materials',
    location: 'Tequemecan Valley, Natlan',
    schedule: {
      Monday: ['Delirious Decadence Series'],
      Tuesday: ['Blazing Sacrificial Heart Series'],
      Wednesday: ['Sacred Lord Series'],
      Thursday: ['Delirious Decadence Series'],
      Friday: ['Blazing Sacrificial Heart Series'],
      Saturday: ['Sacred Lord Series'],
      Sunday: ['All Natlan Weapon Materials']
    },
    drops: ['Delirious Decadence', 'Blazing Sacrificial Heart', 'Sacred Lord']
  },
  {
    id: 'pale-forgotten-glory',
    name: 'Pale Forgotten Glory',
    region: 'Fontaine',
    type: 'Talent Books',
    location: 'Salacia Plain, Fontaine',
    schedule: {
      Monday: ['Teachings of Equity', 'Guide to Equity', 'Philosophies of Equity'],
      Tuesday: ['Teachings of Justice', 'Guide to Justice', 'Philosophies of Justice'],
      Wednesday: ['Teachings of Order', 'Guide to Order', 'Philosophies of Order'],
      Thursday: ['Teachings of Equity', 'Guide to Equity', 'Philosophies of Equity'],
      Friday: ['Teachings of Justice', 'Guide to Justice', 'Philosophies of Justice'],
      Saturday: ['Teachings of Order', 'Guide to Order', 'Philosophies of Order'],
      Sunday: ['All Fontaine Talent Books (Equity, Justice, Order)']
    },
    drops: ['Equity', 'Justice', 'Order']
  },
  {
    id: 'violet-court',
    name: 'Violet Court',
    region: 'Inazuma',
    type: 'Talent Books',
    location: 'Kannazuka, Inazuma',
    schedule: {
      Monday: ['Teachings of Transience Series'],
      Tuesday: ['Teachings of Elegance Series'],
      Wednesday: ['Teachings of Light Series'],
      Thursday: ['Teachings of Transience Series'],
      Friday: ['Teachings of Elegance Series'],
      Saturday: ['Teachings of Light Series'],
      Sunday: ['All Inazuma Talent Books']
    },
    drops: ['Transience', 'Elegance', 'Light']
  },
  {
    id: 'steeple-of-ignorance',
    name: 'Steeple of Ignorance',
    region: 'Sumeru',
    type: 'Talent Books',
    location: 'Lokapala Jungle, Sumeru',
    schedule: {
      Monday: ['Teachings of Admonition Series'],
      Tuesday: ['Teachings of Ingenuity Series'],
      Wednesday: ['Teachings of Praxis Series'],
      Thursday: ['Teachings of Admonition Series'],
      Friday: ['Teachings of Ingenuity Series'],
      Saturday: ['Teachings of Praxis Series'],
      Sunday: ['All Sumeru Talent Books']
    },
    drops: ['Admonition', 'Ingenuity', 'Praxis']
  },
  {
    id: 'taishan-mansion',
    name: 'Taishan Mansion',
    region: 'Liyue',
    type: 'Talent Books',
    location: 'Jueyun Karst, Liyue',
    schedule: {
      Monday: ['Teachings of Prosperity Series'],
      Tuesday: ['Teachings of Diligence Series'],
      Wednesday: ['Teachings of Gold Series'],
      Thursday: ['Teachings of Prosperity Series'],
      Friday: ['Teachings of Diligence Series'],
      Saturday: ['Teachings of Gold Series'],
      Sunday: ['All Liyue Talent Books']
    },
    drops: ['Prosperity', 'Diligence', 'Gold']
  },
  {
    id: 'forsaken-rift',
    name: 'Forsaken Rift',
    region: 'Mondstadt',
    type: 'Talent Books',
    location: 'Springvale, Mondstadt',
    schedule: {
      Monday: ['Teachings of Freedom Series'],
      Tuesday: ['Teachings of Resistance Series'],
      Wednesday: ['Teachings of Ballad Series'],
      Thursday: ['Teachings of Freedom Series'],
      Friday: ['Teachings of Resistance Series'],
      Saturday: ['Teachings of Ballad Series'],
      Sunday: ['All Mondstadt Talent Books']
    },
    drops: ['Freedom', 'Resistance', 'Ballad']
  }
];
