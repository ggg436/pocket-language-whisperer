
import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Command, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { languages } from '@/data/languages';
import { Check, ChevronsUpDown, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LanguageSelectorProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  className?: string;
}

const LanguageSelector = ({ value, onChange, label, className }: LanguageSelectorProps) => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const selectedLanguage = languages.find(lang => lang.code === value);
  
  // Filter languages based on search query
  const filteredLanguages = useMemo(() => {
    if (!searchQuery) return languages;
    
    const query = searchQuery.toLowerCase();
    return languages.filter(lang => 
      lang.name.toLowerCase().includes(query) || 
      lang.code.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className={cn("flex flex-col space-y-1", className)}>
      {label && <span className="text-xs text-muted-foreground">{label}</span>}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="justify-between w-full bg-white/90 border hover:bg-gray-50"
          >
            {selectedLanguage ? selectedLanguage.name : "Select language..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[250px] p-0" align="start">
          <Command>
            <CommandInput 
              placeholder="Search language..." 
              value={searchQuery}
              onValueChange={setSearchQuery}
              className="py-2"
            />
            <CommandList className="max-h-[300px] overflow-auto">
              <CommandGroup>
                {filteredLanguages.length > 0 ? (
                  filteredLanguages.map((language) => (
                    <CommandItem
                      key={language.code}
                      value={language.code}
                      onSelect={() => {
                        onChange(language.code);
                        setOpen(false);
                        setSearchQuery('');
                      }}
                      className="flex items-center"
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === language.code ? "opacity-100" : "opacity-0"
                        )}
                      />
                      <span>{language.name}</span>
                      <span className="ml-auto text-xs text-muted-foreground">{language.code}</span>
                    </CommandItem>
                  ))
                ) : (
                  <div className="py-6 text-center text-sm text-muted-foreground">No languages found</div>
                )}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default LanguageSelector;
