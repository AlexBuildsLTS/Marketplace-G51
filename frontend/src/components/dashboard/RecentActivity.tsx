// src/components/dashboard/RecentActivity.tsx
import React, { useEffect, useState } from "react";
import { useUserStore } from "@/store/userStore";
import { getRecentActivities } from "@/services/activityService";
import { Activity } from "@/types/activity";
import { formatDate } from "@/lib/utils";
import { Clock } from "lucide-react";

export const RecentActivity: React.FC = () => {
  const { profile } = useUserStore();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchActivities = async () => {
      if (profile) {
        try {
          const data = await getRecentActivities(profile.id);
          setActivities(data);
        } catch (error) {
          console.error("Failed to fetch activities:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchActivities();
  }, [profile]);

  if (isLoading) {
    return <div>Loading recent activities...</div>;
  }

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h4 className="mb-4 text-lg font-semibold">Recent Activity</h4>
      {activities.length === 0 ? (
        <p>No recent activities.</p>
      ) : (
        <ul className="space-y-2">
          {activities.map((activity) => (
            <li key={activity.id} className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span>{activity.description}</span>
              <span className="text-xs text-muted-foreground">
                {formatDate(activity.timestamp)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
