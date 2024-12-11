import { useUIStore } from "@/store/uiStore";
import { CategoryList } from "./Sidebar/CategoryList";
import { SearchBar } from "./Sidebar/SearchBar";
import { SidebarFooter } from "./Sidebar/SidebarFooter";
import { categories } from "@/data/categories";
import { AnimatePresence, motion } from "framer-motion";

export function Sidebar() {
  const { isSidebarOpen } = useUIStore();

  return (
    <>
      <motion.div
        initial={{ x: -320 }}
        animate={{ x: isSidebarOpen ? 0 : -320 }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        className="fixed inset-y-0 left-0 z-50 w-80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-r border-border/40"
      >
        <div className="flex flex-col h-full pt-16">
          <div className="p-4">
            <SearchBar />
          </div>
          <div className="flex-1 overflow-hidden">
            <CategoryList categories={categories} />
          </div>
          <SidebarFooter />
        </div>
      </motion.div>
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
            onClick={() => useUIStore.getState().toggleSidebar()}
          />
        )}
      </AnimatePresence>
    </>
  );
}