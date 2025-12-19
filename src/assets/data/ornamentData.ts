
import tx from '../img/tx.jpg'
export interface Ornament {
  id: string;
  src: string;
  title: string;
  description: string;
  position: { x: number; y: number; z: number };
  scale: number;
  thumbnail?: string;
}

// Helper to generate positions on a cone surface
// Height ~13, Bottom R ~5.5, Top R ~0.5
const generatePosition = (index: number, total: number) => {
  const hRatio = (index + 0.5) / total; // Spread vertically 0 to 1
  const y = 1.0 + hRatio * 10.0; // Height from 1.0 to 11.0
  
  // Radius at this height
  const maxR = 5.5 - (y / 13.0) * 5.0;
  
  // Angle: Golden angle spiral for even distribution
  const angle = index * 2.39996; // radians
  
  const x = Math.cos(angle) * maxR;
  const z = Math.sin(angle) * maxR;
  
  return { x, y, z };
};

export const ornamentImages: Ornament[] = Array.from({ length: 15 }, (_, i) => {
  const pos = generatePosition(i, 15);
  return {
    id: `ornament_${i + 1}`,
    src: tx,
    title: `传说这是一只猪的头像`,
    description: '圣诞节快乐',
    position: pos,
    scale: 0.3
  };
});
// const pos = generatePosition(Math.floor(Math.random() * 10), 15);

// export const ornamentImages: Ornament[] = [
//   {
//     id: 'ornament_1',
//     src: 'https://pic.rmb.bdstatic.com/bjh/3f134665fce/241103/6b88b2748613f652173f1d8f9844f4c0.jpeg',
//     title: '2025 元旦',
//     description: '和家人的合影',
//     position: pos,
//     scale: 0.3
//   },
//   {
//     id: 'ornament_2',
//     src: 'https://pic.rmb.bdstatic.com/bjh/3f134665fce/241103/6b88b2748613f652173f1d8f9844f4c0.jpeg',
//     title: '2025 元旦',
//     description: '和家人的合影',
//     position: pos,
//     scale: 0.3
//   },{
//     id: 'ornament_3',
//     src: 'https://pic.rmb.bdstatic.com/bjh/3f134665fce/241103/6b88b2748613f652173f1d8f9844f4c0.jpeg',
//     title: '2025 元旦',
//     description: '和家人的合影',
//     position: pos,
//     scale: 0.3
//   },{
//     id: 'ornament_4',
//     src: 'https://pic.rmb.bdstatic.com/bjh/3f134665fce/241103/6b88b2748613f652173f1d8f9844f4c0.jpeg',
//     title: '2025 元旦',
//     description: '和家人的合影',
//     position: pos,
//     scale: 0.3
//   },{
//     id: 'ornament_5',
//     src: 'https://pic.rmb.bdstatic.com/bjh/3f134665fce/241103/6b88b2748613f652173f1d8f9844f4c0.jpeg',
//     title: '2025 元旦',
//     description: '和家人的合影',
//     position: pos,
//     scale: 0.3
//   },
// ]
