export type RootStackParamList = {
  Home: undefined;
  Dashboard: undefined;
};

type ContactInfo = {
  phone?: string[];
  email?: string[];
  website?: string[];
};

// NewClient is for the POST where an _id doesn't exist
export type NewClient = {
  name: string;
  status: string;
  serviceType?: string;
  notes?: string[];
  contactInfo?: ContactInfo;
};

export type Client = NewClient & {
  _id: string;
};
