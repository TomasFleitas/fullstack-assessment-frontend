import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

interface SessionData {
  user: {
    id: number;
    name: string;
    email: string;
  } | null;
}

interface SessionContextProps {
  sessionData: SessionData;
  login: (data: SessionData, persist: boolean) => void;
  logout: () => void;
  isLogged: boolean;
}

const SessionContext = createContext<SessionContextProps | undefined>(
  undefined,
);

const SESSION_KEY = 'app_session';

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [sessionData, setSessionData] = useState<SessionData>({
    user: null,
  });

  useEffect(() => {
    const storedSession = localStorage.getItem(SESSION_KEY);
    if (storedSession) {
      setSessionData(JSON.parse(storedSession));
    }
  }, []);

  const login = (data: SessionData, persist: boolean) => {
    setSessionData(data);
    if (persist) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(data));
    }
  };

  const logout = () => {
    setSessionData({ user: null });
    localStorage.removeItem(SESSION_KEY);
  };

  return (
    <SessionContext.Provider
      value={{
        sessionData,
        login,
        logout,
        isLogged: !!sessionData.user?.id,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
