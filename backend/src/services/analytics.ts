export interface FlightRiskScore {
  userId: string;
  score: number; // 0-100
  factors: string[];
  recommendation: string;
}

export class AnalyticsService {
  /**
   * Calculates a "Flight Risk" score based on engagement and skill growth.
   */
  static calculateFlightRisk(userId: string, activityData: any): FlightRiskScore {
    let score = 0;
    const factors: string[] = [];

    // Factor 1: Stagnant Skills
    if (activityData.daysSinceLastSkillUpdate > 90) {
      score += 30;
      factors.push('Stagnant skill profile (>90 days)');
    }

    // Factor 2: Low Social Engagement
    if (activityData.postsLastMonth === 0) {
      score += 20;
      factors.push('Minimal social hub interaction');
    }

    // Factor 3: High Market Demand (Skills specific)
    if (activityData.isHighDemandSkill) {
      score += 25;
      factors.push('Skills are in high market demand (+25% premium)');
    }

    // Factor 4: Participation in Mentorship
    if (!activityData.isParticipatingInMentorship) {
      score += 15;
      factors.push('Not engaged in internal mentorship');
    }

    let recommendation = 'No immediate action needed.';
    if (score > 60) {
      recommendation = 'Critical: Conduct a stay interview and review compensation/growth path.';
    } else if (score > 40) {
      recommendation = 'Monitor: Suggest new learning pathways or internal project rotation.';
    }

    return { userId, score, factors, recommendation };
  }

  /**
   * Mock data for team risk profiles.
   */
  static getTeamRiskProfiles() {
    return [
      { name: 'Sarah Chen', score: 15, risk: 'Low', trend: 'stable' },
      { name: 'Marcus Thorne', score: 45, risk: 'Medium', trend: 'rising' },
      { name: 'James Wilson', score: 72, risk: 'High', trend: 'rising' },
      { name: 'Elena Rodriguez', score: 28, risk: 'Low', trend: 'falling' },
    ];
  }
}
