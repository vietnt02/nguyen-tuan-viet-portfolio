import type { LucideIcon } from 'lucide-react';
import {
  BarChart3,
  BriefcaseBusiness,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Trophy,
} from 'lucide-react';

export type ContactLink = {
  label: string;
  href: string;
  value: string;
  Icon: LucideIcon;
};

export type TimelineEntry = {
  title: string;
  organization: string;
  period: string;
  description: string[];
};

export type Project = {
  name: string;
  period: string;
  summary: string;
  highlights: string[];
  tools: string[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const profile = {
  name: 'Nguyễn Tuấn Việt',
  role: 'Data Analyst',
  location: 'Đống Đa, Hà Nội',
  tagline:
    'Ứng viên Data Analyst có nền tảng International Business, kinh nghiệm xử lý dữ liệu, báo cáo, SQL, Python và trực quan hóa bằng Power BI/Tableau.',
  cvPath: '/CV_NguyenTuanViet_DataAnalyst.pdf',
};

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    href: 'mailto:vietnt.work@gmail.com',
    value: 'vietnt.work@gmail.com',
    Icon: Mail,
  },
  {
    label: 'Phone',
    href: 'tel:+84378491891',
    value: '0378491891',
    Icon: Phone,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vietnt02',
    value: 'linkedin.com/in/vietnt02',
    Icon: BriefcaseBusiness,
  },
  {
    label: 'Location',
    href: 'https://maps.google.com/?q=Dong+Da+Ha+Noi',
    value: profile.location,
    Icon: MapPin,
  },
];

export const stats = [
  { value: '60%', label: 'giảm thời gian xử lý dữ liệu tại ICOMM' },
  { value: '2024', label: 'tốt nghiệp Foreign Trade University' },
  { value: '3+', label: 'nhóm công cụ phân tích và trực quan hóa' },
];

export const education: TimelineEntry[] = [
  {
    title: 'Major: International Business',
    organization: 'Foreign Trade University',
    period: '10/2020 - 01/2024',
    description: [
      'Xây dựng nền tảng về kinh doanh quốc tế, phân tích dữ liệu vận hành và tư duy ra quyết định dựa trên dữ liệu.',
    ],
  },
];

export const experience: TimelineEntry[] = [
  {
    title: 'Data Analyst Intern',
    organization: 'ICOMM Media & Tech JSC',
    period: '04/2023 - 08/2023',
    description: [
      'Thu thập, xử lý và lập báo cáo dữ liệu bằng công cụ nội bộ.',
      'Tối ưu công thức Excel, giảm 60% thời gian xử lý dữ liệu so với quy trình thủ công.',
      'Được ghi nhận là Outstanding Intern trong tháng 05/2023.',
    ],
  },
  {
    title: 'Internal Communications',
    organization: 'MB AGEAS Life Insurance Company Limited',
    period: '08/2021 - 08/2022',
    description: [
      'Đóng góp vào kế hoạch truyền thông nội bộ cho kênh đại lý trên nền tảng nội bộ.',
      'Lên ý tưởng và thiết kế template truyền thông cho sự kiện nội bộ và chương trình thúc đẩy kinh doanh.',
    ],
  },
];

export const activities: TimelineEntry[] = [
  {
    title: 'Head of Public Relations Department',
    organization: 'International Business Club - IBC FTU',
    period: '08/2021 - 09/2022',
    description: [
      'Dùng Excel và Google Sheets để làm sạch, chuẩn bị dữ liệu cho hoạt động câu lạc bộ.',
      'Phân tích website traffic và social media engagement để cải thiện kế hoạch IMC.',
    ],
  },
  {
    title: 'Member of Human Resources Department',
    organization: 'International Business Club - IBC FTU',
    period: '2021 - 2022',
    description: ['Tham gia vận hành nhân sự và hoạt động nội bộ của câu lạc bộ.'],
  },
];

export const projects: Project[] = [
  {
    name: 'English Premier League Data Collection',
    period: '08/2021 - 09/2022',
    summary:
      'Pipeline thu thập, lưu trữ và trực quan hóa dữ liệu bóng đá Premier League.',
    highlights: [
      'Thiết kế SQL database để lưu dữ liệu bóng đá thiết yếu.',
      'Viết Python scripts tương tác với Premier League API và nạp dữ liệu vào SQL Server.',
      'Dùng Tableau dashboard để trình bày dữ liệu và hỗ trợ phân tích.',
    ],
    tools: ['SQL Server', 'Python', 'Premier League API', 'Tableau'],
  },
];

export const certificates = [
  { name: 'SQL (Advanced)', issuer: 'HackerRank', date: '04/2023' },
  {
    name: 'Data Analysis and Visualization Foundations',
    issuer: 'IBM Skills Network',
    date: '05/2022',
  },
  { name: 'Python (Basic)', issuer: 'HackerRank', date: '08/2023' },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Data Analysis & Visualization',
    skills: ['SQL', 'Python', 'Power BI', 'Tableau', 'Google Spreadsheet', 'Microsoft Excel'],
  },
  {
    title: 'Office Productivity',
    skills: ['Microsoft Office', 'Google Workspace'],
  },
  {
    title: 'Design & Media',
    skills: ['Adobe Photoshop', 'Illustrator', 'Premiere', 'Ladipage'],
  },
];

export const focusAreas = [
  { label: 'Reporting automation', Icon: BarChart3 },
  { label: 'Business communication', Icon: BriefcaseBusiness },
  { label: 'Academic foundation', Icon: GraduationCap },
  { label: 'Recognized internship result', Icon: Trophy },
];
