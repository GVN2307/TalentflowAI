export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  criteria: string;
}

export const BADGES: Badge[] = [
  {
    id: '1',
    name: 'Skill Pioneer',
    description: 'First 5 skill gaps closed successfully.',
    icon: 'sparkles',
    criteria: 'skill_gap_closed >= 5'
  },
  {
    id: '2',
    name: 'Knowledge Beacon',
    description: 'Shared 10 high-value resources in the social hub.',
    icon: 'zap',
    criteria: 'posts_shared >= 10'
  },
  {
    id: '3',
    name: 'Master Mentor',
    description: 'Completed 5 successful mentorship tracks.',
    icon: 'trophy',
    criteria: 'mentorships_completed >= 5'
  }
];

export class GamificationService {
  /**
   * Evaluates if a user is eligible for any new badges based on their activity stats.
   */
  static evaluateBadges(userStats: any): Badge[] {
    const earnedBadges: Badge[] = [];
    
    if (userStats.skillGapClosed >= 5) earnedBadges.push(BADGES[0]!);
    if (userStats.postsShared >= 10) earnedBadges.push(BADGES[1]!);
    if (userStats.mentorshipsCompleted >= 5) earnedBadges.push(BADGES[2]!);
    
    return earnedBadges;
  }

  /**
   * Mock leaderboard data generation.
   */
  static getLeaderboard(departmentId?: string) {
    return [
      { id: '1', name: 'Sarah Chen', score: 1450, badges: 8, rank: 1, avatar: 'Sarah' },
      { id: '2', name: 'Marcus Thorne', score: 1280, badges: 5, rank: 2, avatar: 'Marcus' },
      { id: '3', name: 'Devraj Singh', score: 1100, badges: 6, rank: 3, avatar: 'Devraj' },
      { id: '4', name: 'Elena Rodriguez', score: 950, badges: 4, rank: 4, avatar: 'Elena' },
      { id: '5', name: 'James Wilson', score: 820, badges: 3, rank: 5, avatar: 'James' },
    ];
  }
}
