import { ChatMetaData } from '../models/chatMetaData';

const sampleTitles = [
  'Fixing TypeError in Test',
  'Correct Data Retrieval Code',
  'Avantages Blockchain Revente Luxe',
  'Mock File Creation',
  'TypeScript Variable Issues',
  'Puissance batterie Mercedes C300de',
  'Testing HttpClient Parameters',
  'Improving Angular Performance',
  'Setting Up Angular Material',
  'Understanding RxJS Operators',
  'Using Angular Guards Effectively',
  'Optimizing Component Rendering',
  'Handling Form Validation Errors',
  'Implementing Lazy Loading',
  'Best Practices for Angular Services',
];

export const chatHistoryMock: ChatMetaData[] = Array.from(
  { length: 25 },
  (_, index): ChatMetaData => ({
    id: `chat-${index + 1}`,
    title: sampleTitles[index % sampleTitles.length], // Use titles in a cyclic manner
    date: new Date(new Date().setDate(new Date().getDate() - index)), // Generates dates from today backward
    requestNumber: index + 1,
  })
);
