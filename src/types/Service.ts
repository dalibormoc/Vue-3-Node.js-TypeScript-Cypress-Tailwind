interface Service {
  id: string;
  name: string;
  description: string;
  type: "HTTP" | "REST";
  published: boolean;
  configured: boolean;
  versions: Version[];
  metrics: Metrics;
}

interface Metrics {
  latency: number;
  uptime: number;
  requests: number;
  errors: number;
}

interface Version {
  id: string;
  name: string;
  description: string;
  developer?: Developer;
  updated_at: Date;
}

interface Developer {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export default Service;
