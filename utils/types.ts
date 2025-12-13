export type RootStackParamList = {
  Home: undefined;
  Dashboard: undefined;
};

type ContactInfo = {
  phone?: string[];
  email?: string[];
  website?: string[];
};

export type Client = {
  _id: string;
  name: string;
  status: string;
  contactInfo?: ContactInfo;
  serviceType?: string;
  notes?: string[];
};
