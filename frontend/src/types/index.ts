export interface Skill {
  name: string;
  category: 'technical' | 'soft' | 'domain';
  proficiency: 1 | 2 | 3 | 4 | 5;
  verifiedBy: 'assessment' | 'peer' | 'project' | 'certification';
  lastUpdated: Date;
  evidence: string[];
}

export interface SkillProfile {
  userId: string;
  skills: Skill[];
  gapAnalysis: {
    criticalGaps: SkillGap[];
    trendingSkills: string[];
  };
}

export interface SkillGap {
  skillName: string;
  requiredLevel: number;
  currentLevel: number;
  priority: 'high' | 'medium' | 'low';
  description: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'employee' | 'mentor';
  avatarUrl?: string;
}
