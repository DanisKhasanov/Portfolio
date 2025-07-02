
import { Heart } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

export const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`py-12 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-900 text-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-800  pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by React
            Developer Danis Khasanov
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
