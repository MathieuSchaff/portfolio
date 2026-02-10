// const skills = [
//   { id: 1, name: "React", icon: "⚛️", category: "frontend" },
//   { id: 2, name: "JavaScript", icon: "JS", category: "frontend" },
//   { id: 3, name: "TypeScript", icon: "TS", category: "frontend" },
//   { id: 4, name: "Next.js", icon: "N", category: "frontend" },
//   { id: 5, name: "HTML5", icon: "H5", category: "frontend" },
//   { id: 6, name: "CSS3 / SCSS", icon: "CSS", category: "frontend" },
//   { id: 7, name: "Node.js", icon: "NJ", category: "backend" },
//   { id: 9, name: "Git", icon: "Git", category: "tools" },
//   { id: 10, name: "postgreSQL", icon: "PSQL", category: "backend" },
//   { id: 11, name: "Redux", icon: "Rx", category: "frontend" },
//   { id: 12, name: "Animations", icon: "AN", category: "frontend" },
//   { id: 13, name: "React Query", icon: "RQ", category: "frontend" },
//   { id: 14, name: "Linux", icon: "LX", category: "tools" },
//   { id: 15, name: "Terminal", icon: "TMN", category: "tools" },
//   { id: 16, name: "Bun.js", icon: "BUN", category: "backend" },
// ];

// export default skills;
import {
  Atom,
  FileJson,
  FileType2,
  Globe,
  Code2,
  Paintbrush,
  Server,
  GitBranch,
  Database,
  Layers,
  Sparkles,
  RefreshCw,
  MonitorCog,
  TerminalSquare,
  Flame,
} from "lucide-react";

const ICON_SIZE = 28;
const ICON_STROKE = 1.8;

const skills = [
  {
    id: 1,
    name: "React",
    icon: <Atom size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
    category: "frontend",
  },
  {
    id: 2,
    name: "JavaScript",
    icon: <FileJson size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
    category: "frontend",
  },
  {
    id: 3,
    name: "TypeScript",
    icon: <FileType2 size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
    category: "frontend",
  },
  {
    id: 4,
    name: "Next.js",
    icon: <Globe size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
    category: "frontend",
  },
  {
    id: 5,
    name: "HTML5",
    icon: <Code2 size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
    category: "frontend",
  },
  {
    id: 6,
    name: "CSS3 / SCSS",
    icon: <Paintbrush size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
    category: "frontend",
  },
  {
    id: 7,
    name: "Node.js",
    icon: <Server size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
    category: "backend",
  },
  {
    id: 9,
    name: "Git",
    icon: <GitBranch size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
    category: "tools",
  },
  {
    id: 10,
    name: "PostgreSQL",
    icon: <Database size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
    category: "backend",
  },
  {
    id: 11,
    name: "Redux",
    icon: <Layers size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
    category: "frontend",
  },
  {
    id: 12,
    name: "Animations",
    icon: <Sparkles size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
    category: "frontend",
  },
  {
    id: 13,
    name: "React Query",
    icon: <RefreshCw size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
    category: "frontend",
  },
  {
    id: 14,
    name: "Linux",
    icon: <MonitorCog size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
    category: "tools",
  },
  {
    id: 15,
    name: "Terminal",
    icon: <TerminalSquare size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
    category: "tools",
  },
  {
    id: 16,
    name: "Bun.js",
    icon: <Flame size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
    category: "backend",
  },
];

export default skills;
