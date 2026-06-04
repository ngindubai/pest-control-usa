"use client";

import { cn } from "@/lib/utils";
import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes, type SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

// ─── Input ────────────────────────────────────────────────────────

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, className, id, ...props }, ref) => {
    const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-semibold text-[var(--color-navy)]"
          >
            {label}
            {props.required && (
              <span className="text-[var(--color-red)] ml-0.5" aria-hidden="true">*</span>
            )}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full px-4 py-2.5 rounded-[var(--radius-btn)] border text-sm transition-all duration-200",
            "bg-white text-[var(--color-navy)] placeholder:text-gray-400",
            "border-gray-200 hover:border-[var(--color-navy-light)] focus:border-[var(--color-red)] focus:outline-none focus:ring-2 focus:ring-[var(--color-red)]/20",
            error && "border-[var(--color-red)] focus:ring-[var(--color-red)]/30",
            className
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} role="alert" className="text-xs text-[var(--color-red)] font-medium">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${inputId}-hint`} className="text-xs text-[var(--color-slate-custom)]">
            {hint}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

// ─── Textarea ─────────────────────────────────────────────────────

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, className, id, rows = 4, ...props }, ref) => {
    const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-semibold text-[var(--color-navy)]"
          >
            {label}
            {props.required && (
              <span className="text-[var(--color-red)] ml-0.5" aria-hidden="true">*</span>
            )}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          rows={rows}
          className={cn(
            "w-full px-4 py-2.5 rounded-[var(--radius-btn)] border text-sm transition-all duration-200 resize-y",
            "bg-white text-[var(--color-navy)] placeholder:text-gray-400",
            "border-gray-200 hover:border-[var(--color-navy-light)] focus:border-[var(--color-red)] focus:outline-none focus:ring-2 focus:ring-[var(--color-red)]/20",
            error && "border-[var(--color-red)]",
            className
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} role="alert" className="text-xs text-[var(--color-red)] font-medium">
            {error}
          </p>
        )}
        {hint && !error && (
          <p className="text-xs text-[var(--color-slate-custom)]">{hint}</p>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

// ─── Select ───────────────────────────────────────────────────────

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, hint, options, placeholder, className, id, ...props }, ref) => {
    const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-semibold text-[var(--color-navy)]"
          >
            {label}
            {props.required && (
              <span className="text-[var(--color-red)] ml-0.5" aria-hidden="true">*</span>
            )}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={inputId}
            className={cn(
              "w-full appearance-none px-4 py-2.5 pr-10 rounded-[var(--radius-btn)] border text-sm transition-all duration-200 cursor-pointer",
              "bg-white text-[var(--color-navy)]",
              "border-gray-200 hover:border-[var(--color-navy-light)] focus:border-[var(--color-red)] focus:outline-none focus:ring-2 focus:ring-[var(--color-red)]/20",
              error && "border-[var(--color-red)]",
              className
            )}
            aria-invalid={!!error}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-slate-custom)]"
            aria-hidden="true"
          />
        </div>
        {error && (
          <p role="alert" className="text-xs text-[var(--color-red)] font-medium">
            {error}
          </p>
        )}
        {hint && !error && (
          <p className="text-xs text-[var(--color-slate-custom)]">{hint}</p>
        )}
      </div>
    );
  }
);
Select.displayName = "Select";

// ─── Checkbox ────────────────────────────────────────────────────

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="flex flex-col gap-1">
        <label htmlFor={inputId} className="flex items-start gap-2.5 cursor-pointer group">
          <input
            ref={ref}
            type="checkbox"
            id={inputId}
            className={cn(
              "mt-0.5 w-4 h-4 rounded border-gray-300 text-[var(--color-red)] accent-[var(--color-red)] cursor-pointer transition-all",
              className
            )}
            aria-invalid={!!error}
            {...props}
          />
          <span className="text-sm text-[var(--color-navy)] group-hover:text-[var(--color-navy-light)]">
            {label}
          </span>
        </label>
        {error && (
          <p role="alert" className="text-xs text-[var(--color-red)] font-medium ml-6">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";

// ─── Phone Input ──────────────────────────────────────────────────

export interface PhoneInputProps extends Omit<InputProps, "type"> {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ label = "Phone Number", ...props }, ref) => {
    return (
      <Input
        ref={ref}
        type="tel"
        label={label}
        autoComplete="tel"
        inputMode="tel"
        placeholder="(555) 000-0000"
        maxLength={14}
        {...props}
      />
    );
  }
);
PhoneInput.displayName = "PhoneInput";

// ─── Zip Input ────────────────────────────────────────────────────

export interface ZipInputProps extends Omit<InputProps, "type"> {
  value?: string;
}

export const ZipInput = forwardRef<HTMLInputElement, ZipInputProps>(
  ({ label = "ZIP Code", ...props }, ref) => {
    return (
      <Input
        ref={ref}
        type="text"
        label={label}
        autoComplete="postal-code"
        inputMode="numeric"
        placeholder="e.g. 77001"
        maxLength={5}
        pattern="[0-9]{5}"
        {...props}
      />
    );
  }
);
ZipInput.displayName = "ZipInput";
